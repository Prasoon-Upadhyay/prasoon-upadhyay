/**
 * MDTab component.
 */
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Container from '../Container';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);
const markdownFiles = import.meta.glob('../../data/tabs/*.md', {
  query: '?raw',
  import: 'default',
});

export interface MDTabProps {
  fileName: string;
}

const MDTab: React.FC<MDTabProps> = ({ fileName }) => {
  const [contents, setContents] = useState<string>('');

  const classes = useStyles();

  useEffect(() => {
    let isActive = true;

    const loadFile = async () => {
      const loadMarkdown = markdownFiles[`../../data/tabs/${fileName}.md`];
      if (!loadMarkdown) {
        if (isActive) {
          setContents('');
        }
        return;
      }

      const text = (await loadMarkdown()) as string;
      if (isActive) {
        setContents(text);
      }
    };

    loadFile();

    return () => {
      isActive = false;
    };
  }, [fileName]);

  return (
    <Container seo={{ title: fileName }}>
      <div className={classes.mdpage}>
        <ReactMarkdown>{contents}</ReactMarkdown>
      </div>
    </Container>
  );
};

export default MDTab;
