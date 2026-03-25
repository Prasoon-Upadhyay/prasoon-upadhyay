/**
 * Generic GHButton component.
 */
import React, { useState, useEffect } from 'react';
import { useLocalStorageState } from '../../hooks';
import ButtonLink, { ButtonLinkProps } from '../ButtonLink';
import { LocalCache } from '../../models';
import { buildRecordObject, isRecordUsable } from '../../utils';

export interface GHButtonProps extends ButtonLinkProps {
  resource: {
    endpoint: string;
    attr: string;
  };
}

const GHButton: React.FC<GHButtonProps & LocalCache.Prop> = ({
  resource: { attr, endpoint },
  timeout = 10, // 10 mins
  ...btnProps
}) => {
  const [loading, setLoading] = useState(false);
  const [attrCountRecord, setAttrCountRecord] = useLocalStorageState<
    number | undefined
  >(attr, undefined);

  useEffect(() => {
    let isMounted = true;

    const fetchApi = async (): Promise<any> => {
      const response = await fetch(endpoint);
      const json = await response.json();

      if (isMounted && json[attr] >= 0) {
        setAttrCountRecord(buildRecordObject(json[attr]));
      }

      if (isMounted) {
        setLoading(false);
      }
    };

    if (!isRecordUsable(attrCountRecord, timeout)) {
      setLoading(true);
      fetchApi();
    }

    return () => {
      isMounted = false;
    };
  }, [attr, attrCountRecord, endpoint, setAttrCountRecord, timeout]);

  return (
    <ButtonLink
      {...btnProps}
      showCount={!loading && attrCountRecord !== undefined}
      count={attrCountRecord.data}
    />
  );
};

export default GHButton;
