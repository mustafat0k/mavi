import React from "react";
import { toast } from "react-toastify";
import { colors } from "./mock";
import { format } from 'date-fns'
import { isLet } from "@babel/types";
import Head from "next/head";

export const up = process.env.SERVER_STORAGE_URI

export const uri = process.env.domain
export const url = `${uri}/api`
export const uploads = `${uri}/public/uploads/`


export const Hal = (isim: any, hal: any) => {
    let iyelik = 'iyelik',
        iHali = 'i',
        eHali = 'e',
        deHali = 'de',
        denHali = 'den',
        iEkleri = 'ııiiuuüü',
        sonHarf = isim[isim.length - 1],
        istisna = ~~/[ei][^ıüoö]*[au]l$|alp$/.test(isim) * 2,   // Sapkali harf istisnasi var mı kontrol eder Orn: Alp, Resul, Cemal... 0 veya 2 degeri doner
        sonSesli = isim.match(/[aıeiouöü]/g).pop(),   // seslilerden sonuncusunu alır

        // Ek in sesli harfine karar verir
        ek = (hal == iyelik || hal == iHali) ?  // iyelik veya i hali ise
            // Son sesli harf aıeiouöü harflerinin hangisine denk geliyorsa o index numarasıyla iEkleri nin n'inci elemanı seçilir
            iEkleri['aıeiouöü'.indexOf(sonSesli) + istisna]
            : // e, de veya den hali ise
            // Son sesli harf a, ı, o veya u ise ek a (istisna var ise e ), e, i, ö veya ü ise ek e harfi
            (/[aıou]/.test(sonSesli)) ? istisna ? 'e' : 'a' : 'e';

    // Kaynastirma harflerini ekler
    if (sonHarf == sonSesli) {
        ek = (hal == iyelik) ? 'n' + ek : (hal == iHali || hal == eHali) ? 'y' + ek : ek
    }

    // Harf yumusamalarini kontrol eder
    if (hal == deHali || hal == denHali) {
        ek = (/[fstkçşhp]/.test(sonHarf) ? 't' : 'd') + ek
    }

    // Iyelik veya den hali icin ek in sonuna n harfi ekler
    if (hal == iyelik || hal == denHali) {
        ek += 'n'
    }

    return isim + "'" + ek;
};

export const randomBinary = (min: number, max: number) => {
    return Math.floor(min + Math.random() * (max + 1 - min)).toString(2);
}

export const removeHTMLTags = (str: any) => {
    return str.replace(/<[^>]*>?/gm, '');
};

export const debounce = (a: any, b: any, c: any) => {
    //@ts-ignore
    var d, e;
    return function () {
        function h() {
            d = null;
            c || (e = a.apply(f, g));
        }
        //@ts-ignore
        var f = this, g = arguments;
        //@ts-ignore
        return (clearTimeout(d), d = setTimeout(h, b), c && !d && (e = a.apply(f, g)), e)
    }
}


export const generateRandomNDigits = (n: number) => {
    return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
}


export const emptySvg = <svg width="184" height="152" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(24 31.67)"><ellipse fill-opacity=".8" fill="#F5F5F7" cx="67.797" cy="106.89" rx="67.797" ry="12.668"></ellipse><path d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z" fill="#AEB8C2"></path><path d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z" fill="url(#linearGradient-1)" transform="translate(13.56)"></path><path d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" fill="#F5F5F7"></path><path d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z" fill="#DCE0E6"></path></g><path d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z" fill="#DCE0E6"></path><g transform="translate(149.65 15.383)" fill="#FFF"><ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse><path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path></g></g></svg>


export const notify = (title: string = '', err = false) => toast.dark(title || '🦄 Wow, Başarı ile oluşturuldu!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

/**
 


export const notifySuccess = (title: string = '', opt = 'success', err = false) => toast.[opt](title || '🦄 Wow, Başarı ile oluşturuldu!', {
    position: "bottom-right",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});


 */


export const Meta = (title: any = 'thekernel!') => (
    <React.Fragment>
        <meta charSet="utf-8" />
        <meta name="author" content="Mustafa Tok" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content=""></meta>
        <meta property="og:type" content="product" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <meta data-hid="og:site_name" property="og:site_name" content="" />
        <meta data-hid="og:og:type" property="og:type" content="website" />
        <meta name="theme-color" content="ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content="/favicon.ico" />
        <meta name="twitter:image" content="/favicon.ico" />
        <meta name="twitter:site" content="@twitter" />
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="" />
    </React.Fragment>
)

export function isNumber(data: any) {
    return (typeof data === 'number' && !isNaN(data));
}

export const reformatRequirements = (data: any, typeId: string) => {
    let list: any = [];
    data?.map((el: any) => {
        console.log(el)
        const { type, count, _id } = el;
        let l = { type, count, num: generateRandomNDigits(15), typeId, _id };
        list.push(l)
    })
    return list;
}



export const EmptyWrapper = ({ title = '' }: any) => (
    <div className="empty-wrapper">
        <div>
            <img src="/assets/empty.svg" />
            <h3>{title || 'Mevcut Değil!'}</h3>
        </div>
    </div>
)

export const wordRegex = `[a-zA-Z0-9]+` 
export const clauseRegex = `[a-zA-Z0-9\s&]+\b(?=\s[^a-zA-Z0-9]*)*` 



export const body = `You probably have a resume that you tweak from time to time, 
adding skills here or new job titles there. After all, 
it's important to keep your resume updated to reflect 
your growing set of abilities and accomplishments. 
## Accomplishments
But it might come as a surprise to hear that The New York Times 
recommends writing a second resume as a kind of self-help assignment. 
Except instead of highlighting your triumphs, you list your failures, 
mistakes, and struggles along the way.

This anti-resume goes by many names: failure resume, anti-portfolio, 
or "CV of failures," to name a few. The overarching idea is the same, 
though. By keeping track of your failures and reflecting on them 
in a way that's constructive, you can learn from your mistakes and 
achieve more in the future.`


export const htmlBody = `<b>You probably have a resume that you tweak from time to time, adding skills here or new</b>
<br />
<i>job titles there. After all, it's important to keep your resume </i>
<br />
<br />
Updated to reflect your growing set of abilities 
<br />
<h2>Accomplishments.</h2> 

<i>But it might come as a surprise to hear that The New York Times recommends writing a second resume as a kind of self-help assignment.</i>
 
Except instead of highlighting your triumphs, you list your failures, <a href="test.com"> mistakes, and struggles along the way. </a> This anti-resume goes by many names: failure resume, <b> anti-portfolio, or "CV of failures," to name a few. </b> The overarching idea is the same, though. By keeping track of 

<ul>
    <li>ur failures and reflecting on them in a way that's constructive,</li>
    <li>you can learn from your mistakes and </li>
    <li>achieve more in the future.</li>
</ul>

`