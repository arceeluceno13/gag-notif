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

interface Tab3Props {
  onOpenSettings: () => void;
}

const Tab3: React.FC<Tab3Props> = ({ onOpenSettings }) => {
  const { allStock, loading } = useStockData(1000);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Stock</IonTitle>
          <IonButton slot="end" onClick={onOpenSettings}>
            <IonIcon icon={settingsOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">All Stock</IonTitle>
          </IonToolbar>
        </IonHeader>
        {loading ? (
          <IonSpinner />
        ) : (
          <>
            {/* All Stock */}
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>All Stock</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {allStock ? (
                  <div className="allstock-details">
                    {Object.keys(allStock).map((key) => {
                      const stock = allStock[key];
                      return (
                        <div className="stock-category" key={key}>
                          <div className="stock-header">
                            <span className="stock-name">{stock.name}</span>
                            <span className="stock-countdown">
                              ⏳ {stock.countdown?.formatted}
                            </span>
                          </div>
                          <ul className="stock-items">
                            {stock.items?.map((item: any, idx: number) => (
                              <li key={idx}>
                                <span className="data-label">{item.name}:</span>{" "}
                                <span className="data-value">
                                  {item.quantity}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <div className="stock-updated">
                            <small>
                              Last updated:{" "}
                              {new Date(stock.last_updated).toLocaleString()}
                            </small>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div>No all stock data.</div>
                )}
              </IonCardContent>
            </IonCard>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
