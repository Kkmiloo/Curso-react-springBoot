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
  removeEmployee,
  saveEmployee,
  searchEmployeeById,
  searchEmployees,
} from "./EmployeeApi";
import Employee from "./Employee";
/* import './Page.css'; */

const EmployeeEdit: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const routeMatch: any = useRouteMatch("/page/Employees/:id");
  const [employee, setEmployee] = useState<Employee>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    /*     let result = searchEmployees();
    setCLientes(result); */
    if (routeMatch?.params?.id !== "new") {
      let result = await searchEmployeeById(routeMatch?.params?.id);
      setEmployee(result);
    }
  };

  const save = async () => {
    await saveEmployee(employee);
    history.push("/page/Employees");
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
                    (employee.firtsName = String(e.detail.value))
                  }
                  value={employee.firtsName}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Apellido</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (employee.lastName = String(e.detail.value))
                  }
                  value={employee.lastName}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Email</IonLabel>
                <IonInput
                  onIonChange={(e) => (employee.email = String(e.detail.value))}
                  value={employee.email}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Telefono</IonLabel>
                <IonInput
                  onIonChange={(e) => (employee.phone = String(e.detail.value))}
                  value={employee.phone}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Dirección</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (employee.address = String(e.detail.value))
                  }
                  value={employee.address}
                  placeholder="Enter text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="fixed">Dirección</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (employee.salary = Number(e.detail.value))
                  }
                  value={employee.salary}
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

export default EmployeeEdit;
