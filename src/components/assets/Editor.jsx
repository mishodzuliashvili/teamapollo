import React from 'react'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-glsl";
import "ace-builds/src-noconflict/theme-cloud9_night";
import "ace-builds/src-noconflict/ext-language_tools";
import * as ace from 'ace-builds/src-noconflict/ace';
ace.config.set('basePath', '/assets/ui/');
ace.config.set('modePath', '');
ace.config.set('themePath', '');
const Editor = ({ aceE, setAceE }) => {
    return (
        <AceEditor
            height='100%'
            width='100%'
            mode="glsl"
            value={aceE}
            theme="cloud9_night"
            onChange={(val) => setAceE(val)}
            name="UNIQUE_ID_OF_DIV"
            fontSize="20px"
            // className='w-full h-full text-3xl'
            editorProps={{ $blockScrolling: true }}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
            }}
        />
    )
}

export default Editor