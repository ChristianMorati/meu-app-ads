// components/AdSenseBanner.js
import { useEffect } from 'react';

export default function AdSenseBanner() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3940256099942544';
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);

        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <div key="adsense">
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-format="fluid"
                data-ad-layout-key="-fb+5w+4e-db+86"
                data-ad-client="ca-pub-5441471454135578"
                data-ad-slot="5157710870">
            </ins>
        </div>
    );
}