import { connect } from "react-redux";
import objectPath from "object-path";
// import Footer from "./footer/Footer";
import LayoutConfig from "./LayoutConfig";
import LayoutInitializer from "./LayoutInitializer";


import { SideBar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { MenuConfig } from "./MenuConfig";

function Layout({
  children,
  asideDisplay,
  subheaderDisplay,
  selfLayout,
  contentExtended,
  layoutConfig,
  contentContainerClasses,
  contentClasses
}) {
  // scroll to top after location changes
  window.scrollTo(0, 0);
  return (
    <LayoutInitializer
      menuConfig={MenuConfig}
      layoutConfig={LayoutConfig}
      htmlClassService={undefined}    >
      {/* <!-- begin:: Header Mobile --> */}
      {/* <!-- end:: Header Mobile --> */}

      <div className="container">
        <div className="">
          <div
            className=""
            id="wrapper"
          >
            {/* <!-- begin:: Header READY --> */}

            <Header />
            {/* <!-- end:: Header --> */}

            {/* <!-- begin:: Content --> */}
            <div
              className="body-page"
              id="body"
            >
              <div
                className=''
              >
                <SideBar />
                <div
                  className=''
                >
                  {subheaderDisplay && <>SEARCH</>}
                    { children }
                </div>
              </div>
              {/*<!-- end:: Content Body -->*/}
            </div>
            {/* <!-- end:: Content --> */}

            {/* <Footer /> */}
          </div>
        </div>
        {/* <!-- end:: Body --> */}
      </div>
      {/* <ScrollTop />
      <QuickPanel /> */}
    </LayoutInitializer>
  )
}

const mapStateToProps = ({ builder: { layoutConfig } }) => ({
  layoutConfig,
  selfLayout: objectPath.get(layoutConfig, "self.layout"),
  asideDisplay: objectPath.get(layoutConfig, "aside.self.display"),
  subheaderDisplay: objectPath.get(layoutConfig, "subheader.display"),
  fluid: objectPath.get(layoutConfig, "content.width") === "fluid",
  contentExtended: objectPath.get(layoutConfig, "content.extended")
});

export default connect(mapStateToProps)(Layout);
