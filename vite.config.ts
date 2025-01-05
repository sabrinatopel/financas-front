import AutoImport from 'unplugin-auto-import/vite'
import path from 'path';
export default {
  plugins: [
    AutoImport({
      imports: [
        'react', // Auto-importa React
        {
          'primereact/autocomplete': ['AutoComplete'],
          'primereact/accordion': ['Accordion'],
          'primereact/accordiontab': ['AccordionTab'],
          'primereact/animateonscroll': ['AnimateOnScroll'],
          'primereact/avatar': ['Avatar'],
          'primereact/avatargroup': ['AvatarGroup'],
          'primereact/badge': ['Badge'],
          'primereact/badgedirective': ['BadgeDirective'],
          'primereact/blockui': ['BlockUI'],
          'primereact/button': ['Button'],
          'primereact/buttongroup': ['ButtonGroup'],
          'primereact/breadcrumb': ['Breadcrumb'],
          'primereact/calendar': ['Calendar'],
          'primereact/card': ['Card'],
          'primereact/cascadeselect': ['CascadeSelect'],
          'primereact/carousel': ['Carousel'],
          'primereact/checkbox': ['Checkbox'],
          'primereact/chip': ['Chip'],
          'primereact/chips': ['Chips'],
          'primereact/floatlabel': ['FloatLabel'],
          'primereact/colorpicker': ['ColorPicker'],
          'primereact/column': ['Column'],
          'primereact/columngroup': ['ColumnGroup'],
          'primereact/confirmdialog': ['ConfirmDialog'],
          'primereact/confirmpopup': ['ConfirmPopup'],
          'primereact/confirmationservice': ['ConfirmationService'],
          'primereact/contextmenu': ['ContextMenu'],
          'primereact/datatable': ['DataTable'],
          'primereact/dataview': ['DataView'],
          'primereact/dataviewlayoutoptions': ['DataViewLayoutOptions'],
          'primereact/deferredcontent': ['DeferredContent'],
          'primereact/dialog': ['Dialog'],
          'primereact/dialogservice': ['DialogService'],
          'primereact/divider': ['Divider'],
          'primereact/dock': ['Dock'],
          'primereact/dropdown': ['Dropdown'],
          'primereact/dynamicdialog': ['DynamicDialog'],
          'primereact/fieldset': ['Fieldset'],
          'primereact/fileupload': ['FileUpload'],
          'primereact/focustrap': ['FocusTrap'],
          'primereact/galleria': ['Galleria'],
          'primereact/image': ['Image'],
          'primereact/inlinemessage': ['InlineMessage'],
          'primereact/inplace': ['Inplace'],
          'primereact/inputgroup': ['InputGroup'],
          'primereact/inputgroupaddon': ['InputGroupAddon'],
          'primereact/inputswitch': ['InputSwitch'],
          'primereact/inputtext': ['InputText'],
          'primereact/inputmask': ['InputMask'],
          'primereact/inputnumber': ['InputNumber'],
          'primereact/knob': ['Knob'],
          'primereact/listbox': ['Listbox'],
          'primereact/megamenu': ['MegaMenu'],
          'primereact/menu': ['Menu'],
          'primereact/menubar': ['Menubar'],
          'primereact/message': ['Message'],
          'primereact/multiselect': ['MultiSelect'],
          'primereact/orderlist': ['OrderList'],
          'primereact/organizationchart': ['OrganizationChart'],
          'primereact/overlaypanel': ['OverlayPanel'],
          'primereact/paginator': ['Paginator'],
          'primereact/panel': ['Panel'],
          'primereact/panelmenu': ['PanelMenu'],
          'primereact/password': ['Password'],
          'primereact/picklist': ['PickList'],
          'primereact/progressbar': ['ProgressBar'],
          'primereact/progressspinner': ['ProgressSpinner'],
          'primereact/rating': ['Rating'],
          'primereact/radiobutton': ['RadioButton'],
          'primereact/ripple': ['Ripple'],
          'primereact/row': ['Row'],
          'primereact/selectbutton': ['SelectButton'],
          'primereact/scrollpanel': ['ScrollPanel'],
          'primereact/scrolltop': ['ScrollTop'],
          'primereact/skeleton': ['Skeleton'],
          'primereact/slider': ['Slider'],
          'primereact/sidebar': ['Sidebar'],
          'primereact/speeddial': ['SpeedDial'],
          'primereact/splitbutton': ['SplitButton'],
          'primereact/splitter': ['Splitter'],
          'primereact/splitterpanel': ['SplitterPanel'],
          'primereact/steps': ['Steps'],
          'primereact/styleclass': ['StyleClass'],
          'primereact/tabmenu': ['TabMenu'],
          'primereact/tieredmenu': ['TieredMenu'],
          'primereact/textarea': ['Textarea'],
          'primereact/toast': ['Toast'],
          'primereact/toastservice': ['ToastService'],
          'primereact/toolbar': ['Toolbar'],
          'primereact/tabview': ['TabView'],
          'primereact/tabpanel': ['TabPanel'],
          'primereact/tag': ['Tag'],
          'primereact/terminal': ['Terminal'],
          'primereact/timeline': ['Timeline'],
          'primereact/togglebutton': ['ToggleButton'],
          'primereact/tooltip': ['Tooltip'],
          'primereact/tree': ['Tree'],
          'primereact/treeselect': ['TreeSelect'],
          'primereact/treetable': ['TreeTable'],
          'primereact/tristatecheckbox': ['TriStateCheckbox'],
          'primereact/virtualscroller': ['VirtualScroller'],
          'primereact/iconfield': ['IconField'],
          'primereact/inputicon': ['InputIcon'],
        },
      ],
      dts: true, // Gera os tipos de definição TypeScript (opcional)
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // Defina o alias '@' para o diretório 'src'
    },
  },
}
