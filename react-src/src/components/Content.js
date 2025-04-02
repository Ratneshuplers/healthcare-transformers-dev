import React, { useEffect, useRef, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import '../css/Terms.scss';
import '../css/Article.scss';
import '../css/InlineBanner.scss';
import '../css/InlineBanner2.scss';

function appendScript(settings, baseUrl, setScriptLoaded) {
	if (window.MktoForms2) return setScriptLoaded(true);
	const script = document.createElement("script");
	script.src = `//${baseUrl}/js/forms2/js/forms2.min.js`;
	const script2 = document.createElement("script");
	script2.src = `//${settings.baseUrl}/rs/${settings.marketoCode}/images/ReCAPTCHAv3.js`;
	document.body.appendChild(script);
	script.onload = () => (window.MktoForms2 ? document.body.appendChild(script2) : null);
	script2.onload = () => (window.MktoForms2 ? setScriptLoaded(true) : null);
}

function Content ({html, rootClass}) {
	const firstRenderRef = useRef(true);
	const [scriptLoaded, setScriptLoaded] = useState(false);
	useEffect(() => {
		if (firstRenderRef.current && scriptLoaded) {
			firstRenderRef.current = false;
			try {
				const mktFormsEls = document.querySelectorAll('[id^="mktoForm_"]');
				let formIdsList = [];
				mktFormsEls.forEach((node, i) => {
					const isAlreadyLoaded = node.getAttribute('loaded')
					node.setAttribute('loaded', true)
					const elId = node.getAttribute('id');
					const elIdParts = elId.split('_');
					if(formIdsList.indexOf(elIdParts[1]) === -1) {
						formIdsList.push(elIdParts[1])
						if (!isAlreadyLoaded && elIdParts.length === 2) { /* isAlreadyLoaded is to prevent double loading */
							if (elIdParts[0] === 'mktoForm' && elIdParts[1].length > 0) {
								const formId = elIdParts[1];
								const ctaWrapperEl = node.closest('.cta-modal-wrapper');
								let accessUrl = null;
								let accessPostType = null;
								let accessPostId = null;
								let ajaxUrl = null;
								let queryParameter = null;
								if (ctaWrapperEl) {
									const accessNode = ctaWrapperEl.querySelector(`[ht-access-formid^="${formId}"]`);
									if (accessNode) {
										accessPostType = accessNode.getAttribute('ht-access-postType');
										accessPostId = accessNode.getAttribute('ht-access-postId');
										ajaxUrl = accessNode.getAttribute('ht-access-ajaxUrl');
										accessUrl = accessNode.getAttribute('ht-access');
									}
								}
								window.MktoForms2.whenReady(function (mktoForm) {
									mktoForm.addHiddenFields({
										FormSubmissionID: uuidv4()
									});
								});
								window.MktoForms2.loadForm(`//${window.marketoSettings.baseUrl}`, window.marketoSettings.marketoCode, formId, function (form) {
									form.onSuccess(function (values, followUpUrl) {
										if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined' && typeof window.gtag === 'function') {
											if(formId === '5853'){
												window.lintrk('track', { conversion_id: 11721004 });
											}
											if(formId === '5846'){
												window.gtag('event', 'newsletter_subscribe', {
												});
											}else{
												window.gtag('event', 'form_submit', {
												});
											}
											window.dataLayer.push({'formid': values.formVid});
											window.dataLayer.push({'page_url': window.location.href});
										}
										if (values && values.FormSubmissionID) {
											queryParameter = '?FormSubmissionID=' + values.FormSubmissionID + '&formId='+formId;
										}
										if (accessUrl) {
											window.open(accessUrl + queryParameter, "_blank") || window.location.replace(accessUrl + queryParameter);
										}
										if(accessPostType && accessPostId && ajaxUrl && accessPostType === 'ht-training'){
											(async () => {
												await fetch(`${ajaxUrl}?action=trainingAttendeesFormSubmitted&trainingId=${accessPostId}`);
											})();
										}
										if (ctaWrapperEl) {
											const ctaFormEl = ctaWrapperEl.querySelector('.cta-form')
											if (ctaFormEl) {
												ctaFormEl.style.display = 'none';
											}
											const ctaThankEl = ctaWrapperEl.querySelector('.cta-thank-you')
											if (ctaThankEl) {
												ctaThankEl.style.display = 'block';
											}
										}
										else {
											if (followUpUrl) {
												window.location.href = followUpUrl + queryParameter;
											}
											else {
												window.location.href = `${window.frontend.homeUrl}/thank-you/${queryParameter}`;
											}
										}
										return false;
									})
								});
							}
						}
					}
				});
			} catch (e) {}
		}
		appendScript(window.marketoSettings, window.marketoSettings.baseUrl, setScriptLoaded);
	}, [scriptLoaded, html])
	return (
		<div className={rootClass} dangerouslySetInnerHTML={{__html: html}}></div>
	);
}

export default Content;
