import { useState } from "react";

export default function MockAd() {
    const [hasAds, setHasAds] = useState(true)

    if (hasAds) {
        return (
            <div>
                {hasAds && (
                    <AdSenseBanner />
                )}
                <button onClick={() => setHasAds(!hasAds)}></button>
            </div>
        );
    }
}