import { ToastService } from 'primereact/toastservice';
import { ConfirmationService } from 'primereact/confirmationservice';
import { PrimeReact } from 'primereact/api';

// Componentes do PrimeReact
import AutoComplete from 'primereact/autocomplete';
import Accordion from 'primereact/accordion';
import AccordionTab from 'primereact/accordiontab';
import Avatar from 'primereact/avatar';
import AvatarGroup from 'primereact/avatargroup';
import Badge from 'primereact/badge';
import BlockUI from 'primereact/blockui';
import Button from 'primereact/button';
import Calendar from 'primereact/calendar';
import Card from 'primereact/card';
import Checkbox from 'primereact/checkbox';
import Chip from 'primereact/chip';
import ColorPicker from 'primereact/colorpicker';
import Column from 'primereact/column';
import ConfirmDialog from 'primereact/confirmdialog';
import DataTable from 'primereact/datatable';
import Dialog from 'primereact/dialog';
import Dropdown from 'primereact/dropdown';
import InputText from 'primereact/inputtext';
import InputMask from 'primereact/inputmask';
import Knob from 'primereact/knob';
import Listbox from 'primereact/listbox';
import Menu from 'primereact/menu';
import MultiSelect from 'primereact/multiselect';
import Password from 'primereact/password';
import ProgressBar from 'primereact/progressbar';
import Rating from 'primereact/rating';
import SelectButton from 'primereact/selectbutton';
import Slider from 'primereact/slider';
import Sidebar from 'primereact/sidebar';
import TabMenu from 'primereact/tabmenu';
import TabView from 'primereact/tabview';
import Tag from 'primereact/tag';
import Tooltip from 'primereact/tooltip';
import Tree from 'primereact/tree';

// Defina qualquer configuração global que queira
PrimeReact.locale = 'pt-br';

const primeComponents = {
  AutoComplete,
  Accordion,
  AccordionTab,
  Avatar,
  AvatarGroup,
  Badge,
  BlockUI,
  Button,
  Calendar,
  Card,
  Checkbox,
  Chip,
  ColorPicker,
  Column,
  ConfirmDialog,
  DataTable,
  Dialog,
  Dropdown,
  InputText,
  InputMask,
  Knob,
  Listbox,
  Menu,
  MultiSelect,
  Password,
  ProgressBar,
  Rating,
  SelectButton,
  Slider,
  Sidebar,
  TabMenu,
  TabView,
  Tag,
  Tooltip,
  Tree
};

const primeServices = {
  ToastService,
  ConfirmationService
};

export { primeComponents, primeServices };
