import React from 'react';
import LoadingIcon from "./LoadingIcon";

type Props = {
    loading: boolean,
    children: React.ReactNode
}
export default function Loader({ loading, children }: Props) {
    
    
      if (loading) {
        return (
            <div className="fixed inset-0 loader-wrapper align-center">
                <div className="relative">
                    <LoadingIcon />
                </div>
            </div>
        );
      }


    return (
        <>{children}</>
    )
}