import * as React from 'react';
import { motion } from 'framer-motion';
import { MdContentCopy } from 'react-icons/md';
import { QwikCopyProps } from './lib/typeDefinition';
import { htmlToRichText } from './lib/utils/htmlToText';

const QwikCopy = (params: QwikCopyProps) => {
  return (
    <>
      {params.isDisabled ? (
        ''
      ) : (
        <motion.div
          style={params?.styles}
          onClick={() => htmlToRichText(params.htmlContent)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, backgroundColor: '#3cb472' }}
          transition={{ type: 'spring', stiffness: 400, damping: 16 }}
        >
          <MdContentCopy />
        </motion.div>
      )}
    </>
  );
};

export default QwikCopy;
