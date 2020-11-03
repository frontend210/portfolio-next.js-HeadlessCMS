import Document, { Head, Main, NextScript, Html } from "next/document";

const isProd = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {isProd && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];

                    function gtag(){
                      dataLayer.push(arguments);
                    }

                    gtag('js', new Date());

                    gtag('config', '${process.env.GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
            {/*<script src="vendor/jquery/jquery.min.js"/>*/}
            {/*<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"/>*/}
            {/*<script src="vendor/jquery.easing/jquery.easing.min.js"/>*/}
            {/*<script src="vendor/php-email-form/validate.js"/>*/}
            {/*<script src="vendor/waypoints/jquery.waypoints.min.js"/>*/}
            {/*<script src="vendor/counterup/counterup.min.js"/>*/}
            {/*<script src="vendor/owl.carousel/owl.carousel.min.js"/>*/}
            {/*<script src="vendor/isotope-layout/isotope.pkgd.min.js"/>*/}
            {/*<script src="vendor/venobox/venobox.min.js"/>*/}
            {/*<script src="js/main.js"/>*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
