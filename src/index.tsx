import * as React from 'react';
import { MdContentCopy } from 'react-icons/md'
import { QwikCopyProps } from './lib/typeDefinition';
import { htmlToRichText } from './lib/utils/htmlToText';


export const QwikCopy = (params: QwikCopyProps) => {
  return <>

    {params.isDisabled ? (
      <div style={params?.styles}></div>
    ) : <div style={params?.styles} onClick={() => htmlToRichText(params.htmlContent)}><MdContentCopy /></div>

    }
  </>

};
