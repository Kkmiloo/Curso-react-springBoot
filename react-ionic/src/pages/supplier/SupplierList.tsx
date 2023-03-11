import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useParams } from "react-router";
import ExploreContainer from "../../components/ExploreContainer";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { add, pencil, trashBin } from "ionicons/icons";
import { useEffect, useState } from "react";
import { removeSupplier, searchSuppliers } from "./SupplierApi";
import Supplier from "./Supplier";
/* import './Page.css'; */

const SupplierList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchSuppliers();
    setSuppliers(result);
  };

  const remove = async (id: string) => {
    await removeSupplier(id);
    search();
  };

  const addClient = () => {
    history.push("/page/Suppliers/new");
  };

  const editClient = (id: string) => {
    history.push("/page/Suppliers/" + id);
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
            <IonTitle>Listado de usuarios</IonTitle>

            <IonItem>
              <IonButton
                onClick={addClient}
                color="primary"
                fill="solid"
                slot="end"
                size="default"
              >
                <IonIcon icon={add} />
                Agregar Cliente
              </IonButton>
            </IonItem>
            <IonGrid className="table">
              <IonRow>
                <IonCol size="auto">Id</IonCol>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Telefono</IonCol>
                <IonCol>Dirección</IonCol>
                <IonCol>Contacto</IonCol>
                <IonCol>Web</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {suppliers.map((supplier: Supplier) => {
                const { name, contact, phone, id, email, address, web } =
                  supplier;
                return (
                  <IonRow key={id}>
                    <IonCol size="auto">{id} </IonCol>
                    <IonCol>{name}</IonCol>
                    <IonCol>{email}</IonCol>
                    <IonCol> {phone}</IonCol>
                    <IonCol> {address}</IonCol>
                    <IonCol> {contact}</IonCol>
                    <IonCol> {web}</IonCol>

                    <IonCol>
                      <IonButton
                        onClick={() => editClient(id!)}
                        color="primary"
                        fill="clear"
                      >
                        <IonIcon icon={pencil} slot="icon-only"></IonIcon>
                      </IonButton>
                      <IonButton
                        onClick={() => remove(id!)}
                        color="danger"
                        fill="clear"
                      >
                        <IonIcon icon={trashBin} slot="icon-only"></IonIcon>
                      </IonButton>
                    </IonCol>
                  </IonRow>
                );
              })}
            </IonGrid>
          </IonCard>
        </>
      </IonContent>
    </IonPage>
  );
};

export default SupplierList;
