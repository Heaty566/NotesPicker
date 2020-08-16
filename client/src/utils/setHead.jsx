import * as React from "react";
import { Helmet } from "react-helmet";

const PageHead = ({ pageDescription, pageKeyWords, pageTitle, pageImageURL }) => {
        return (
                <Helmet>
                        {/* config head start */}
                        <title>{`${pageTitle} | Notespicker`}</title>
                        <meta name="description" content={pageDescription} />
                        <meta name="keywords" content={pageKeyWords} />
                        {/* config head end  */}

                        {/* config facebook start */}
                        <meta name="og:tittle" content={pageTitle} />
                        <meta name="og:description" content={pageDescription} />
                        <meta name="og:type" content="article" />
                        <meta name="og:image" content={pageImageURL} />
                        {/* config facebook end  */}

                        {/* config google start  */}
                        {/* config google end */}

                        {/* config twitter start  */}
                        <meta name="twitter:title" content={pageTitle} />
                        <meta name="twitter:description" content={pageDescription} />
                        <meta name="twitter:image" content={pageImageURL} />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:site" content="@website-username" />
                        {/* config twitter end */}
                </Helmet>
        );
};

export default PageHead;
