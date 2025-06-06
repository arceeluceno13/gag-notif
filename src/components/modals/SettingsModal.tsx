import React from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText,
  IonIcon,
} from "@ionic/react";
import { notificationsOutline } from "ionicons/icons";
import { LocalNotifications } from "@capacitor/local-notifications";

interface SettingsModalProps {
  isOpen: boolean;
  onDidDismiss: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onDidDismiss,
}) => {
  const handleEnableNotifications = async () => {
    const perm = await LocalNotifications.requestPermissions();
    if (perm.display === "granted") {
      await LocalNotifications.schedule({
        notifications: [
          {
            title: "Notifications Enabled",
            body: "You will now receive notifications!",
            id: 1,
            schedule: { at: new Date(Date.now() + 1000) },
          },
        ],
      });
      alert("Notifications enabled!");
    } else {
      alert("Permission denied.");
    }
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onDidDismiss}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h2>
            <IonIcon icon={notificationsOutline} /> Notifications
          </h2>
          <p>Allow this app to send you notifications.</p>
        </IonText>
        <IonButton expand="block" onClick={handleEnableNotifications}>
          Enable Notifications
        </IonButton>
        <IonButton expand="block" fill="clear" onClick={onDidDismiss}>
          Close
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default SettingsModal;
