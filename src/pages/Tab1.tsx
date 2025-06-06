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

// Accept onOpenSettings as a prop
interface Tab1Props {
  onOpenSettings: () => void;
}

const Tab1: React.FC<Tab1Props> = ({ onOpenSettings }) => {
  const { weather, seedsStock, loading } = useStockData(1000);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Weather & Seed Stock</IonTitle>
          <IonButton slot="end" onClick={onOpenSettings}>
            <IonIcon icon={settingsOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {loading ? (
          <IonSpinner />
        ) : (
          <>
            {/* Weather Card */}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  Weather Status
                  {weather?.icon && (
                    <span style={{ fontSize: "1.5em", marginLeft: 10 }}>
                      {weather.icon}
                    </span>
                  )}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {weather ? (
                  <div className="weather-details">
                    <div className="weather-main">
                      <span className="weather-type">
                        {weather.weatherType}
                      </span>
                      <span className="weather-rarity">{weather.rarity}</span>
                    </div>
                    <div className="weather-effect">
                      {weather.effectDescription}
                    </div>
                    <div className="weather-bonus">
                      <strong>Crop Bonuses:</strong> {weather.cropBonuses}
                    </div>
                    <div className="weather-cue">
                      <em>{weather.visualCue}</em>
                    </div>
                    <div className="weather-updated">
                      <small>
                        Last updated:{" "}
                        {new Date(weather.last_updated).toLocaleString()}
                      </small>
                    </div>
                  </div>
                ) : (
                  <div>No weather data.</div>
                )}
              </IonCardContent>
            </IonCard>

            {/* Seeds Stock */}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Seeds Stock</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {seedsStock ? (
                  <div className="seeds-details">
                    <div>
                      <span className="data-label">Countdown:</span>
                      <span className="stock-countdown">
                        ⏳ {seedsStock.countdown?.formatted}
                      </span>
                    </div>
                    <div>
                      <span className="data-label">Total items:</span>
                      <span className="data-value">
                        {seedsStock.items?.length}
                      </span>
                    </div>
                    <ul className="seeds-list">
                      {seedsStock.items?.map((item: any, idx: number) => (
                        <li key={idx}>
                          <span className="data-label">{item.name}:</span>{" "}
                          <span className="data-value">{item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="weather-updated">
                      <small>
                        Last updated:{" "}
                        {new Date(weather.last_updated).toLocaleString()}
                      </small>
                    </div>
                  </div>
                ) : (
                  <div>No seeds stock data.</div>
                )}
              </IonCardContent>
            </IonCard>
            {/* Donation Card */}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Support This App</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div style={{ textAlign: "center" }}>
                  <p>
                    If you find this app helpful, consider supporting
                    development!
                  </p>
                  <IonButton
                    color="primary"
                    href="https://paypal.me/KarenAtillo13?country.x=PH&locale.x=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate with PayPal
                  </IonButton>
                  <div style={{ margin: "16px 0" }}>
                    <strong>GCash:</strong>
                    <div style={{ marginTop: 4, fontSize: "1.1em" }}>
                      09154931229
                    </div>
                  </div>
                </div>
              </IonCardContent>
            </IonCard>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
