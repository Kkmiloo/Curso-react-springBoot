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
  removeSupplier,
  saveSupplier,
  searchSupplierById,
  searchSuppliers,
} from "./SupplierApi";
import Supplier from "./Supplier";
/* import './Page.css'; */

const SupplierEdit: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const routeMatch: any = useRouteMatch("/page/Suppliers/:id");
  const [supplier, setSupplier] = useState<Supplier>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    /*     let result = searchSuppliers();
    setCLientes(result); */
    if (routeMatch?.params?.id !== "new") {
      let result = await searchSupplierById(routeMatch?.params?.id);
      setSupplier(result);
    }
  };

  const save = async () => {
    await saveSupplier(supplier);
    history.push("/page/Suppliers");
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
            Customer
            <IonList>
              <IonItem>
                <IonLabel position="fixed">Nombre</IonLabel>
                <IonInput
                  onIonChange={(e) => (supplier.name = String(e.detail.value))}
                  value={supplier.name}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Apellido</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (supplier.contact = String(e.detail.value))
                  }
                  value={supplier.contact}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Email</IonLabel>
                <IonInput
                  onIonChange={(e) => (supplier.email = String(e.detail.value))}
                  value={supplier.email}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Telefono</IonLabel>
                <IonInput
                  onIonChange={(e) => (supplier.phone = String(e.detail.value))}
                  value={supplier.phone}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Dirección</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (supplier.address = String(e.detail.value))
                  }
                  value={supplier.address}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Contacto</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (supplier.contact = String(e.detail.value))
                  }
                  value={supplier.contact}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Web</IonLabel>
                <IonInput
                  onIonChange={(e) => (supplier.web = String(e.detail.value))}
                  value={supplier.web}
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

export default SupplierEdit;
