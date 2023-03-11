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
import { removeEmployee, searchEmployees } from "./EmployeeApi";
import Employee from "./Employee";
/* import './Page.css'; */

const EmployeeList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [employees, setEmployee] = useState<Employee[]>([]);

  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchEmployees();
    setEmployee(result);
  };

  const remove = async (id: string) => {
    await removeEmployee(id);
    search();
  };

  const addClient = () => {
    history.push("/page/Employees/new");
  };

  const editClient = (id: string) => {
    history.push("/page/Employees/" + id);
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
                <IonCol>Acciones</IonCol>
                <IonCol>Salario</IonCol>
              </IonRow>

              {employees.map((employee: Employee) => {
                const {
                  firtsName,
                  lastName,
                  phone,
                  id,
                  email,
                  address,
                  salary,
                } = employee;
                return (
                  <IonRow key={id}>
                    <IonCol size="auto">{id} </IonCol>
                    <IonCol>
                      {firtsName} {lastName}
                    </IonCol>
                    <IonCol>{email}</IonCol>
                    <IonCol> {phone}</IonCol>
                    <IonCol> {address}</IonCol>
                    <IonCol> {salary}</IonCol>

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

export default EmployeeList;
