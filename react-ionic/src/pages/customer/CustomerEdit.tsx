import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { add, checkmark, pencil, trashBin } from "ionicons/icons";
import { useEffect, useState } from "react";
import {
  removeCustomer,
  saveCustomer,
  searchCustomerById,
  searchCustomers,
} from "./CustomerApi";
import Customer from "./Customer";
/* import './Page.css'; */

const CustomerEdit: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const routeMatch: any = useRouteMatch("/page/Customers/:id");
  const [customer, setCustomer] = useState<Customer>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    /*     let result = searchCustomers();
    setCLientes(result); */

    let id = routeMatch?.params?.id;
    if (id !== "new") {
      let result = await searchCustomerById(id);
      setCustomer(result);
    }
  };

  const save = async () => {
    await saveCustomer(customer);
    history.push("/page/Customers");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
        <>
          <IonCard>
            <IonTitle>
              {routeMatch?.params?.id === "new"
                ? "Crear Cliente"
                : "Editar Cliente"}
            </IonTitle>

            <IonList>
              <IonItem>
                <IonLabel position="fixed">Nombre</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (customer.firstname = String(e.detail.value))
                  }
                  value={customer.firstname}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Apellido</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (customer.lastname = String(e.detail.value))
                  }
                  value={customer.lastname}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Email</IonLabel>
                <IonInput
                  onIonChange={(e) => (customer.email = String(e.detail.value))}
                  value={customer.email}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Telefono</IonLabel>
                <IonInput
                  onIonChange={(e) => (customer.phone = String(e.detail.value))}
                  value={customer.phone}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Dirección</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (customer.address = String(e.detail.value))
                  }
                  value={customer.address}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
            </IonList>

            <IonItem>
              <IonButton
                onClick={save}
                color="success"
                fill="solid"
                slot="end"
                size="default"
              >
                <IonIcon icon={checkmark} />
                Guardar
              </IonButton>
            </IonItem>
          </IonCard>
        </>
      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;
