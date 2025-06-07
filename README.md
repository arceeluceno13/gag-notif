# GAG RealTime Stock

**GAG RealTime Stock** is a real-time stock tracking app for Weather, Seed, Gear, and Egg stock, built with [Ionic React](https://ionicframework.com/) and [Capacitor](https://capacitorjs.com/).  
It features a responsive UI, dark/light mode support, and real-time updates for in-game stock data.

---

## Features

- 📈 **Real-time stock updates** for Weather, Seeds, Gear, and Eggs
- 🌗 **Dark mode & Light mode** support (auto-detects system theme)
- 📱 **Responsive design** for mobile and desktop
- ⚡ **Fast and modern UI** using Ionic components
- ⚙️ **Settings modal** for notification permissions
- 💖 **Donation support** (PayPal & GCash)

---

## Screenshots

![screenshot](docs/screenshot.png) <!-- Add your screenshot here -->

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Ionic CLI](https://ionicframework.com/docs/cli) (`npm install -g @ionic/cli`)
- [Android Studio](https://developer.android.com/studio) (for Android builds)

### Installation

```sh
git clone https://github.com/arceeluceno13/gag-notif.git
cd gag-notif
npm install
```

### Running in Browser

```sh
ionic serve
```

### Running on Android

1. Build the web assets:
    ```sh
    npm run build
    ```
2. Copy assets to Android:
    ```sh
    npx cap sync android
    ```
3. Open in Android Studio:
    ```sh
    npx cap open android
    ```
4. Build and run from Android Studio.

---

## Customization

- **Change App Name:**  
  Edit `capacitor.config.ts` and `android/app/src/main/res/values/strings.xml`.
- **Change App Icon:**  
  Place a 1024x1024 PNG as `icon.png` in the root and run:
  ```sh
  npx @capacitor/assets generate --icon icon.png
  npx cap sync
  ```
- **Donation Info:**  
  Update the GCash number and PayPal link in `Tab1.tsx` and `Tab2.tsx`.

---

## Support

If you find this app helpful, consider supporting development!

- **PayPal:** [Donate with PayPal](https://paypal.me/KarenAtillo13?country.x=PH&locale.x=en_US)
- **GCash:** 09150262644

---

## License

MIT

---

**Made with ❤️ using Ionic React and Capacitor.**
