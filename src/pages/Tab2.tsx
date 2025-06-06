import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSpinner,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { settingsOutline } from "ionicons/icons";
import { useStockData } from "../hooks/useStockData";
import "./Tab1.css";

interface Tab2Props {
  onOpenSettings: () => void;
}

const Tab2: React.FC<Tab2Props> = ({ onOpenSettings }) => {
  const { gearStock, eggStock, loading } = useStockData(1000); // Use a less frequent poll interval for performance

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gear Stock & Egg Stock</IonTitle>
          <IonButton slot="end" onClick={onOpenSettings}>
            <IonIcon icon={settingsOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Gear & Egg Stock</IonTitle>
          </IonToolbar>
        </IonHeader>
        {loading ? (
          <IonSpinner />
        ) : (
          <>
            {/* Gear Stock Card */}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Gear Stock</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {gearStock ? (
                  <div className="gear-details">
                    <div className="stock-header">
                      <span className="stock-name">{gearStock.name}</span>
                      <span className="stock-countdown">
                        ⏳ {gearStock.countdown?.formatted}
                      </span>
                    </div>
                    <ul className="stock-items">
                      {gearStock.items?.map((item: any, idx: number) => (
                        <li key={idx}>
                          <span className="data-label">{item.name}:</span>{" "}
                          <span className="data-value">{item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="stock-updated">
                      <small>
                        Last updated:{" "}
                        {new Date(gearStock.last_updated).toLocaleString()}
                      </small>
                    </div>
                  </div>
                ) : (
                  <div>No gear stock data.</div>
                )}
              </IonCardContent>
            </IonCard>

            {/* Egg Stock Card */}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Egg Stock</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {eggStock ? (
                  <div className="egg-details">
                    <div className="stock-header">
                      <span className="stock-name">{eggStock.name}</span>
                      <span className="stock-countdown">
                        ⏳ {eggStock.countdown?.formatted}
                      </span>
                    </div>
                    <ul className="stock-items">
                      {eggStock.items?.map((item: any, idx: number) => (
                        <li key={idx}>
                          <span className="data-label">{item.name}:</span>{" "}
                          <span className="data-value">{item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="stock-updated">
                      <small>
                        Last updated:{" "}
                        {new Date(eggStock.last_updated).toLocaleString()}
                      </small>
                    </div>
                  </div>
                ) : (
                  <div>No egg stock data.</div>
                )}
              </IonCardContent>
            </IonCard>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
