import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';

/**
 * This is service class where it inject AdItem class and 
 * make object of AdItem defining the type having component and
 * json data
 * 
 * This is ultimately used by ad-banner.coponent.ts
 * 
 */
@Injectable()
export class AdService {
    getAds() {
        return [
            new AdItem(HeroProfileComponent, { name: 'Bomasto', bio: 'Brave as they come!' }),
            new AdItem(HeroProfileComponent, { name: 'Dr IQ', bio: 'Smart as tey come!' }),
            new AdItem(HeroJobAdComponent, { headline: 'Hiring for several positions', body: 'Submit your resume today!' }),
            new AdItem(HeroJobAdComponent, { headline: 'Openings in all departments', body: 'Apply today' }),
        ]

    }

}