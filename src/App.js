import React, { useEffect, useState } from "react"
import "blip-toolkit/dist/blip-toolkit.css"
import { getApplication, getServices } from "./api/applicationService"
import { showToast, withLoading } from "./api/commomService"
import { PageHeader } from "components/PageHeader"
import { BlipTable } from "components/BlipTable"
import { CommonProvider } from "contexts/CommonContext"
import { PageTemplate } from "components/PageTemplate"
import { BlipTabs } from 'blip-toolkit'

const tableContactsModel = [
    { label: "Name", key: "name" },
    { label: "Group", key: "group" },
    { label: "Identity", key: "identity" },
    { label: "Source", key: "source" }
]

const tableThreadsModel = [
    { label: "Identity", key: "identity" },
    { label: "Last Message", key: "lastMessage" },
    { label: "Unread Messages", key: "unreadMessages" }
]

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
                                idKey="identity"
                                model={tableServicesModel}
                                data={services}
                                canSelect = {false}
                                bodyHeight="400px"
                                selectedItems={[]}
                                action="teste"
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