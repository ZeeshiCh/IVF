import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../Screens/splashScreen';
import OnBoarding1 from '../Screens/OnboardingScreens/onBoarding1';
import OnBoarding2 from '../Screens/OnboardingScreens/onBoarding2';
import OnBoarding3 from '../Screens/OnboardingScreens/onboarding3';
import OnBoarding4 from '../Screens/OnboardingScreens/onBoarding4';
import Info1 from '../Screens/InfoScreens/info1';
import Info2 from '../Screens/InfoScreens/info2';
import Info3 from '../Screens/InfoScreens/info3';
import Info4 from '../Screens/InfoScreens/info4';
import Info5 from '../Screens/InfoScreens/info5';
import BottomTabNavigator from './BottomTab';
import Profile1 from '../Screens/BottomTab/MyProfile/profile1';
import Profile2Screen from '../Screens/BottomTab/MyProfile/profile2';
import Pharmaceutical from '../Screens/BottomTab/Treatment/Pharmaceutical/pharmaceutical';
import ListOfMedicine from '../Screens/BottomTab/Treatment/Pharmaceutical/listofmedicine';
import MedicationDose from '../Screens/BottomTab/Treatment/Pharmaceutical/medicationdose';
import MedicineListScreen from '../Screens/BottomTab/Treatment/Pharmaceutical/medicinelist';
import Laboratory from '../Screens/BottomTab/Treatment/LabReport/lapreport';
import ScanReportScreen from '../Screens/BottomTab/Treatment/LabReport/Laboratoryreport';
import UltrasoundScan from '../Screens/BottomTab/Treatment/Ultrasound/ultrasoundscan';
import UltrasoundManual from '../Screens/BottomTab/Treatment/Ultrasound/ultrasoundmanual';
import UltrasoundResult from '../Screens/BottomTab/Treatment/Ultrasound/ultrasoundresult';
import UltrasoundReport from '../Screens/BottomTab/Treatment/Ultrasound/ultrasoundreport';
import ScanReport from '../Screens/BottomTab/Treatment/HusbandReport/reportScan';
import Report from '../Screens/BottomTab/Treatment/HusbandReport/report';
import Login from '../Screens/Auth/login';
import ForgetUsername from '../Screens/Auth/forgetusername';
import ForgetPassword from '../Screens/Auth/forgetpassword';
import ResetPassword from '../Screens/Auth/resetpassword';
import Information from '../Screens/BottomTab/Calender/PlusButton/Information';
import StartPeriod from '../Screens/BottomTab/Calender/PlusButton/StartPeriod';
import Stimulation from '../Screens/BottomTab/Calender/PlusButton/Stimulation';
import Triggering from '../Screens/BottomTab/Calender/PlusButton/Triggering';
import Retrival from '../Screens/BottomTab/Calender/PlusButton/Retrival';
import EmbyroTransfer from '../Screens/BottomTab/Calender/PlusButton/EmbyroTransfer';
import PregnancyTest from '../Screens/BottomTab/Calender/PlusButton/PregnancyTest';
import Appointment from '../Screens/BottomTab/Calender/PlusButton/Appointment';
import AddNoteScreen from '../Screens/BottomTab/Calender/PlusButton/Notes';
import Symptoms from '../Screens/BottomTab/Calender/PlusButton/Symptoms/Symptom';
import PhysicalSymptom from '../Screens/BottomTab/Calender/PlusButton/Symptoms/PhysicalSymptom';
import Intimacy from '../Screens/BottomTab/Calender/PlusButton/Symptoms/Intimacy';
import Mood from '../Screens/BottomTab/Calender/PlusButton/Symptoms/Mood';
import CervicalMuscus from '../Screens/BottomTab/Calender/PlusButton/Symptoms/CervicalMuscus';
import Weight from '../Screens/BottomTab/Calender/PlusButton/Symptoms/Weight';
import BasalBodyTemp from '../Screens/BottomTab/Calender/PlusButton/Symptoms/BBT';
import HealthProfile from '../Screens/BottomTab/MyProfile/HealthProfile';
import HormoneTestsScreen from '../Screens/BottomTab/MyProfile/HealthProfile/hormonalpanal';
import MyCycle from '../Screens/BottomTab/MyProfile/MyCycle';
import MyCycle1 from '../Screens/BottomTab/MyProfile/MyCycle/MyCycleOnboarding/mycycle1';
import MyCycle2 from '../Screens/BottomTab/MyProfile/MyCycle/MyCycleOnboarding/mycycle2';
import MyCycle3 from '../Screens/BottomTab/MyProfile/MyCycle/MyCycleOnboarding/mycycle3';
import PreviousCycle from '../Screens/BottomTab/MyProfile/PreviousCycle';
import PreviousCycle1 from '../Screens/BottomTab/MyProfile/PreviousCycle/PreviousCycleOnboarding/previouscycle1';
import PreviousCycle2 from '../Screens/BottomTab/MyProfile/PreviousCycle/PreviousCycleOnboarding/previouscycle2';
import PreviousCycle3 from '../Screens/BottomTab/MyProfile/PreviousCycle/PreviousCycleOnboarding/previouscycle3';
import PreviousCycle4 from '../Screens/BottomTab/MyProfile/PreviousCycle/PreviousCycleOnboarding/previouscycle4';
import PreviousCyclesScreen from '../Screens/BottomTab/MyProfile/PreviousCycles';
import Ivf from '../Screens/BottomTab/MyProfile/IVF';
import MedicationReminder from '../Screens/BottomTab/MyProfile/IVF/Medication';
import EmbyroEgg from '../Screens/BottomTab/MyProfile/IVF/EmbyroEgg';
import EmbyroReport from '../Screens/BottomTab/MyProfile/IVF/EmbyroEgg/embyroreport';
import PregnancyScan from '../Screens/BottomTab/MyProfile/IVF/Labs/scan';
import PregnancyTestResult from '../Screens/BottomTab/MyProfile/IVF/Labs/pregnancyTest';
import Congratulation from '../Screens/BottomTab/MyProfile/IVF/Labs/congratulation';
import TryAgain from '../Screens/BottomTab/MyProfile/IVF/Labs/tryagain';
import YourProfile from '../Screens/Drawer/YourInformation/yourprofile';
import ChangePassword from '../Screens/Drawer/YourInformation/changePassword';
import IVFSuccesCalculator from '../Screens/Drawer/IVF Calculator';
import IVFCycle1Screen from '../Screens/Drawer/IVF Calculator/Cycle1';
import Questionnaire1Screen from '../Screens/Drawer/IVF Calculator/Cycle1/questionare';
import IVFCycle2Screen from '../Screens/Drawer/IVF Calculator/Cycle2';
import Questionnaire2Screen from '../Screens/Drawer/IVF Calculator/Cycle2/questionare';
import IVFCycle3Screen from '../Screens/Drawer/IVF Calculator/Cycle3';
import Questionnaire3Screen from '../Screens/Drawer/IVF Calculator/Cycle3/questionare';
import ResultsScreen from '../Screens/Drawer/IVF Calculator/Result';
import Settings from '../Screens/Drawer/HealthSupport';
import LanguageSelectionScreen from '../Screens/Auth/language';
import TestScreen from '../Screens/BottomTab/MyProfile/InformationScreens/tests';
import EnergizingScreen from '../Screens/BottomTab/MyProfile/InformationScreens/energising';
import RecoveryScreen from '../Screens/BottomTab/MyProfile/InformationScreens/recovery';
import TrasnformationScreen from '../Screens/BottomTab/MyProfile/InformationScreens/transformation';
import WaitForWeeksScreen from '../Screens/BottomTab/MyProfile/InformationScreens/waitforweeks';
import DrugStimulationScreen from '../Screens/BottomTab/MyProfile/InformationScreens/drugstimulation';
import EggRetrivalScreen from '../Screens/BottomTab/MyProfile/InformationScreens/eggretrival';
import EmbyroTransferScreen from '../Screens/BottomTab/MyProfile/InformationScreens/embyrotransfer';
import BeEmpoweredScreen from '../Screens/BottomTab/MyProfile/InformationScreens/beempowered';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LanguageSelectionScreen" component={LanguageSelectionScreen} />
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
      <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
      <Stack.Screen name="Info1" component={Info1} />
      <Stack.Screen name="Info2" component={Info2} />
      <Stack.Screen name="Info3" component={Info3} />
      <Stack.Screen name="Info4" component={Info4} />
      <Stack.Screen name="Info5" component={Info5} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="Profile1" component={Profile1} />
      <Stack.Screen name="Profile2Screen" component={Profile2Screen} />
      <Stack.Screen name="Pharmaceutical" component={Pharmaceutical} />
      <Stack.Screen name="ListOfMedicine" component={ListOfMedicine} />
      <Stack.Screen name="MedicationDose" component={MedicationDose} />
      <Stack.Screen name="MedicineListScreen" component={MedicineListScreen} />
      <Stack.Screen name="Laboratory" component={Laboratory} />
      <Stack.Screen name="ScanReportScreen" component={ScanReportScreen} />
      <Stack.Screen name="UltrasoundScan" component={UltrasoundScan} />
      <Stack.Screen name="UltrasoundManual" component={UltrasoundManual} />
      <Stack.Screen name="UltrasoundResult" component={UltrasoundResult} />
      <Stack.Screen name="UltrasoundReport" component={UltrasoundReport} />
      <Stack.Screen name="ScanReport" component={ScanReport} />
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgetUsername" component={ForgetUsername} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="StartPeriod" component={StartPeriod} />
      <Stack.Screen name="Stimulation" component={Stimulation} />
      <Stack.Screen name="Triggering" component={Triggering} />
      <Stack.Screen name="Retrival" component={Retrival} />
      <Stack.Screen name="EmbyroTransfer" component={EmbyroTransfer} />
      <Stack.Screen name="PregnancyTest" component={PregnancyTest} />
      <Stack.Screen name="Appointment" component={Appointment} />
      <Stack.Screen name="AddNoteScreen" component={AddNoteScreen} />
      <Stack.Screen name="Symptoms" component={Symptoms} />
      <Stack.Screen name="PhysicalSymptom" component={PhysicalSymptom} />
      <Stack.Screen name="Intimacy" component={Intimacy} />
      <Stack.Screen name="Mood" component={Mood} />
      <Stack.Screen name="CervicalMuscus" component={CervicalMuscus} />
      <Stack.Screen name="Weight" component={Weight} />
      <Stack.Screen name="BasalBodyTemp" component={BasalBodyTemp} />
      <Stack.Screen name="HealthProfile" component={HealthProfile} />
      <Stack.Screen name="HormoneTestsScreen" component={HormoneTestsScreen} />
      <Stack.Screen name="MyCycle" component={MyCycle} />
      <Stack.Screen name="MyCycle1" component={MyCycle1} />
      <Stack.Screen name="MyCycle2" component={MyCycle2} />
      <Stack.Screen name="MyCycle3" component={MyCycle3} />
      <Stack.Screen name="PreviousCycle" component={PreviousCycle} />
      <Stack.Screen name="PreviousCycle1" component={PreviousCycle1} />
      <Stack.Screen name="PreviousCycle2" component={PreviousCycle2} />
      <Stack.Screen name="PreviousCycle3" component={PreviousCycle3} />
      <Stack.Screen name="PreviousCycle4" component={PreviousCycle4} />
      <Stack.Screen name="PreviousCyclesScreen" component={PreviousCyclesScreen} />
      <Stack.Screen name="Ivf" component={Ivf} />
      <Stack.Screen name="MedicationReminder" component={MedicationReminder} />
      <Stack.Screen name="EmbyroEgg" component={EmbyroEgg} />
      <Stack.Screen name="EmbyroReport" component={EmbyroReport} />
      <Stack.Screen name="PregnancyScan" component={PregnancyScan} />
      <Stack.Screen name="PregnancyTestResult" component={PregnancyTestResult} />
      <Stack.Screen name="Congratulation" component={Congratulation} />
      <Stack.Screen name="TryAgain" component={TryAgain} />
      <Stack.Screen name="YourProfile" component={YourProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="IVFSuccesCalculator" component={IVFSuccesCalculator} />
      <Stack.Screen name="IVFCycle1Screen" component={IVFCycle1Screen} />
      <Stack.Screen name="Questionnaire1Screen" component={Questionnaire1Screen} />
      <Stack.Screen name="IVFCycle2Screen" component={IVFCycle2Screen} />
      <Stack.Screen name="Questionnaire2Screen" component={Questionnaire2Screen} />
      <Stack.Screen name="IVFCycle3Screen" component={IVFCycle3Screen} />
      <Stack.Screen name="Questionnaire3Screen" component={Questionnaire3Screen} />
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
      <Stack.Screen name="EnergizingScreen" component={EnergizingScreen} />
      <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />
      <Stack.Screen name="TrasnformationScreen" component={TrasnformationScreen} />
      <Stack.Screen name="WaitForWeeksScreen" component={WaitForWeeksScreen} />
      <Stack.Screen name="DrugStimulationScreen" component={DrugStimulationScreen} />
      <Stack.Screen name="EggRetrivalScreen" component={EggRetrivalScreen} />
      <Stack.Screen name="EmbyroTransferScreen" component={EmbyroTransferScreen} />
      <Stack.Screen name="BeEmpoweredScreen" component={BeEmpoweredScreen} />
    </Stack.Navigator>
  );
}
