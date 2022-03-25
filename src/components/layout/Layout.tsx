import { connect } from "react-redux";
import objectPath from "object-path";
// import Footer from "./footer/Footer";
import LayoutConfig from "./LayoutConfig";
import LayoutInitializer from "./LayoutInitializer";


import { SideBar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { MenuConfig } from "./MenuConfig";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Search } from "../search/search";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  const [searchDisplay, setSearchDisplay] = useState(true)

  const perfectScrollbarOptions = {
    wheelSpeed: 2,
    wheelPropagation: false
  }
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/company' || location.pathname === '/bank' ) {
      setSearchDisplay(false)
    } else {
      setSearchDisplay(true)
    }
  }, [location])


  // scroll to top after location changes
  window.scrollTo(0, 0);
  return (
    <LayoutInitializer
      menuConfig={MenuConfig}
      layoutConfig={LayoutConfig}
      htmlClassService={undefined}>
      {/* <!-- begin:: Header Mobile --> */}
      {/* <!-- end:: Header Mobile --> */}

      <div className="container">
        <div className="container-column">
          <SideBar />
        </div>
        <div className="container-column">
          <div className="container-column-inner">
            <Header />
            <PerfectScrollbar
              options={perfectScrollbarOptions}
              className="scroll pr-7 mr-n7"
              style={{ maxHeight: '85vh', position: 'relative' }}
            >
              {searchDisplay && <Search />}

              {children}

              <div className="footer">
                © 2022 <span>SPLYD</span>. All rights reserved
              </div>
            </PerfectScrollbar>

          </div>
        </div>

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
