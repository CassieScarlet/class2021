// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent the mini-infobar from appearing on mobile
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI notify the user they can install the PWA
//   showInstallPromotion();
// });

// window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

// deferredInstallPrompt = evt;
// installButton.removeAttribute('hidden');

// deferredInstallPrompt.prompt();

// evt.srcElement.setAttribute('hidden', true);

// deferredInstallPrompt.userChoice
//     .then((choice) => {
//       if (choice.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt', choice);
//       } else {
//         console.log('User dismissed the A2HS prompt', choice);
//       }
//       deferredInstallPrompt = null;
//     });

//     window.addEventListener('appinstalled', logAppInstalled);

//     console.log('App was installed.', evt);