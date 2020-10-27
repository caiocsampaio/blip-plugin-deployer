import React, { useEffect, useState } from "react"
import "blip-toolkit/dist/blip-toolkit.css"
import { getApplication, getServices, setHeight } from "./api/applicationService"
import { showToast, withLoading } from "./api/commomService"
import { PageHeader } from "components/PageHeader"
import { BlipTable } from "components/BlipTable"
import { CommonProvider } from "contexts/CommonContext"
import { PageTemplate } from "components/PageTemplate"
import { BlipTabs } from 'blip-toolkit'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

const tableServicesModel = [
    { label: "Url", key: "identity" },
    { label: "Bot Name", key: "longName" },
    { label: "Id", key: "shortName" },
    { label: "Service Name", key: "service" },
]

function App() {
    const [application, setApplication] = useState({});
    const [services, setServices] = useState([]);

    const fetchApi = async () => {
        setApplication(await getApplication())
        setServices(await getServices())

        showToast({
            type: "success",
            message: "Success loaded"
        })

        setHeight(200);
    }


    useEffect(() => {
        withLoading(async () => {
            new BlipTabs('tab-nav')
            await fetchApi()
        })
    }, [])

    const title = `Router Deployer Plugin - ${application.name}`;
    
    return (
        <CommonProvider>
            <div id="main" className="App">
                <PageHeader title={title} />
                <PageTemplate title={title}>
                    <div id="tab-nav" className="bp-tabs-container">
                        <ul className="bp-tab-nav">
                            <li>
                                {/* eslint-disable-next-line */}
                                <a href="#" data-ref="services">Services</a>
                            </li>
                        </ul>
                        <div className="bp-tab-content fl w-100" data-ref="services">
                            <BlipTable
                                idKey="shortName"
                                model={tableServicesModel}
                                data={services}
                                canSelect = {false}
                                bodyHeight="400px"
                                selectedItems={[]}
                                addButtons={true}
                            />
                        </div>
                    </div>
                </PageTemplate>
            </div>
        </CommonProvider>
    )
}

export default App