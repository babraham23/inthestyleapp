import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { browseDummyDataData } from '../dummydata/browseData';

type Context = {
    browsingData?: any;
    setBrowsingData?: any;
};

const UserContext = createContext<Context>({
    browsingData: undefined,
    setBrowsingData: null,
});

export const UserProvider = ({ children }: any) => {
    const [browsingData, setBrowsingData] = useState(browseDummyDataData);

    return (
        <UserContext.Provider
            value={{
                browsingData,
                setBrowsingData,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): Context => useContext<Context>(UserContext);
