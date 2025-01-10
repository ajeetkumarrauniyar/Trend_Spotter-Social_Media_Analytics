import React from 'react';

export const BackgroundGradient: React.FC = () => (
    <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900" />
);

export const BackgroundGradient2: React.FC = () => (
    <>
        <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIj48L3JlY3Q+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI4MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSI+PC9jaXJjbGU+PC9zdmc+')] opacity-30" />
        </div>
        <div className="fixed inset-0 -z-10 h-full w-full animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent blur-3xl transform translate-x-full animate-gradient" />
        </div>
    </>
);
