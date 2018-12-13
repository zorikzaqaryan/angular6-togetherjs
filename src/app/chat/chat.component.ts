import {Component, OnInit} from '@angular/core';

declare var TogetherJS: any;

import '../../assets/js/togetherjs-min.js';

@Component({
  moduleId: module.id,
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})

export class ChatComponent implements OnInit {

  public static checkLocalStorageLanguage() {
    localStorage.getItem('');
  }

  constructor() {
  }

  ngOnInit() {
  }

  startSharing() {
    // configure TogetherJS
//    let config = {
//      siteName: 'Some name',
//      toolName: 'Some name',
//      dontShowClicks: true,
//      enableShortcut: false,
//      suppressInvite: false,
//      suppressJoinConfirmation: true,
//      disableWebRTC: true,
//      autoStart: false,
//      includeHashInUrl: false,
//      // ignoreMessages: ['cursor-update', 'keydown', 'scroll-update', 'app.sync'],
//      ignoreMessages: true,
//      on: {
//        'ready': function() {
//
//          // show the link, for convenience
// //          document.getElementById('togetherjs-share-button').click();
//          TogetherJS.config.get('getUserAvatar');
// console.log();
//
// //          BvSIosMbNe
//        },
//        'close': function() { },
//      }
//    };
//    for (let k in config) {
//      window['TogetherJSConfig_' + k] = config[k];
//    }
//



    TogetherJS(this);
  }

  getLink() {
    console.log('getLink >>>> ' + TogetherJS.requireConfig);

  }


}
