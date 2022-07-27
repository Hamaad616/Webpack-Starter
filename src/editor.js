import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';


const editor = new EditorJS({ 
    holder: 'editorjs',
    inlineToolbar: ['link', 'bold', 'italic'],
    tools: { 

        header: {
        class: Header,
        inlineToolbar: true,
            config: {
                placeholder: 'Title',
                level : 1
            }
        },

        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
              config: {
                  placeholder: 'Tell your story...',
               
              }
      },
        
        list: List,

        
    },
    data: {
        "time" : 21312312432343,
        "blocks" : [
        {
            "id" : 1,
            "type" : "header",
            "data" : {
                "text" : "",
                level : 1
            }
        },
        {
            "id" : 2,
            "type": "paragraph",
            "data": {
              "text": ""
            }
          },

        ]
    },

    onReady: function () {
        editor.caret.setToBlock('start', 1)
        editor.focus.set
      },

    })
