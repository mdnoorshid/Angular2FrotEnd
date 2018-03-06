import { Component, Input } from '@angular/core';

import { MyPost } from './mypost';

/**
 * One of the component which need to load dynamically
 */
@Component({
  template: `
        <div class="post-highlights1">
		    <h3>Technology: {{post.name}}</h3>
     		<b>Description:</b>
            <p>{{post.description}}</p>
		</div>
  `  
})
export class TechnologyComponent implements MyPost {
   @Input() post: any;
}    