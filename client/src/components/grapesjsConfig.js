import "grapesjs/dist/css/grapes.min.css";
import 'grapesjs-component-code-editor';
import "grapesjs-parser-postcss";
import 'grapesjs-component-code-editor/dist/grapesjs-component-code-editor.min.css';
const GrapesjsConfig = () => {
  return {

    container: '#gjs',
    height: '700px',
    width: '100%',
    plugins: ['gjs-preset-webpage', 'grapesjs-plugin-modal', 'grapesjs-component-code-editor', "grapesjs-parser-postcss"],
    showOffsets: true,
    fromElement: true,
    noticeOnUnload: false,
    storageManager: false,

    pluginsOpts: {
      'grapesjs-component-code-editor': {
        htmlEnabled: true,
        cssEnabled: true,
      },
    },
    components: "<h1>Hello World</h1>",
    // panels: {
    //   defaults: [
    //     {
    //       id: 'views',
    //       visible: false
    //     },
    //   ]
    // },
    storageManager: {
      id: '',
      type: '',
      autosave: false,
      componentFirst: true,
      storeComponents: false,
      storeStyles: false,
      storeHtml: false,
      storeCss: false,
    },

    blockManager: {
      appendTo: "",
      blocks: [
        // {
        //   id: "youtube",
        //   label: "YouTube",
        //   category: "Video",
        //   attributes: {
        //     class: "fa fa-youtube"
        //   },
        //   content: {
        //     type: "video",
        //     provider: "youtube",
        //     src: "https://www.youtube.com/embed/{id}"
        //   },
        //   activate: true
        // },
        // {
        //   id: 'youtube',
        //   visible: false,
        //   buttons: [
        //     {
        //       id: 'btn-add-youtube',
        //       className: 'fa fa-youtube-play',
        //       command: 'add-youtube',
        //       attributes: {
        //         title: 'Add YouTube Video'
        //       }
        //     }
        //   ]
        // },
        {
          id: "div",
          label: "<b>Grid 3</b>",
          category: "Layout",
          content: `
          <div class="row" style="height:250px">
            <div class="col-lg-4" style="background-color: rgb(219, 139, 139);">
              <p>Cell 1</p>
            </div>
            <div class="col-lg-4"  style="background-color: rgb(219, 139, 139);">
              <p>Cell 2</p>
            </div>
            <div class="col-lg-4"  style="background-color: rgb(219, 139, 139);">
              <p>Cell 3</p>
            </div>
          </div>
          `
        },
        {
          id: "div",
          label: "<b>Grid 4</b>",
          category: "Layout",
          content: `
            <div class="row" style="height:250px">
                  <div class="col-lg-3" style="background-color: rgb(219, 139, 139);">
                    <p>Cell 1</p>
                  </div>
                  <div class="col-lg-3"  style="background-color: rgb(219, 139, 139);">
                    <p>Cell 2</p>
                  </div>
                  <div class="col-lg-3"  style="background-color: rgb(219, 139, 139);">
                  <p>Cell 3</p>
                </div>
                <div class="col-lg-3"  style="background-color: rgb(219, 139, 139);">
                  <p>Cell 4</p>
                </div>
            </div>
          `
        },
        {
          id: "section",
          label: "<b>Section</b>",
          attributes: { class: "gjs-block-section" },
          content: `<section>
           <h1>This is a simple title</h1>
           <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
         </section>`,
        },
        {
          id: "text",
          label: "Text",
          content: '<div data-gjs-type="text">Insert your text here</div>',
        },
        {
          id: "ul",
          label: "Unordered List",
          content: "<ul><li>Item 1</li><li>Item 2</li></ul>",
        },
        {
          id: "ol",
          label: "Ordered List",
          content: "<ol><li>Item 1</li><li>Item 2</li></ol>",
        },
        {
          id: "image",
          label: "Image",
          content: { type: "image" },
          activate: true,
        },
        {
          id: "paragraph",
          label: "Paragraph",
          content: '<p data-gjs-type="text">Insert your paragraph here</p>',
        },
        {
          id: "link",
          label: "Link",
          content: '<a data-gjs-type="link" href="#">Insert your link here</a>',
        },
      ],
    },
    deviceManager: {
      devices:
        [
          {
            id: 'desktop',
            name: 'Desktop',
            width: '',
          },
          {
            id: 'tablet',
            name: 'Tablet',
            width: '768px',
            widthMedia: '992px',
          },
          {
            id: 'mobilePortrait',
            name: 'Mobile portrait',
            width: '320px',
            widthMedia: '575px',
          },
        ]
    },
  };
};

export default GrapesjsConfig;