// import React, { useState } from 'react';
// import { Tab, Tabs } from 'react-bootstrap';
// import { useQuery } from "@tanstack/react-query";

// const Dashboard3 = () => {
//     const [freeBusy, setFreeBusy] = useState('free');
//     console.log(freeBusy);

//     const {
//         data: user = [],
//         isLoading,
//         refetch,
//     } = useQuery({
//         queryKey: ["instructorData"],
//         queryFn: async () => {
//             const res = await fetch("http://localhost:5000/users");
//             const data = await res.json();
//             return data;
//         },
//     });

//     const freeButton = (id, update) => {
//         const information = {
//             timeStatus: new Date().toLocaleTimeString(),
//             dateStatus: new Date().toLocaleDateString(),
//             id: id,
//             timeManagment: update,
//         };
//         fetch(`http://localhost:5000/users`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(information),
//         })
//             .then(res => res.json())
//             .then(data => {
//                 refetch();
//             });
//     };

//     console.log(user);

//     return (
//         <div>
//             <Tabs
//                 activeKey={freeBusy}
//                 onSelect={(selectedKey) => setFreeBusy(selectedKey)}
//                 id="uncontrolled-tab-example"
//                 className="mb-3"
//             >
//                 <Tab eventKey="free" title="Free" />
//                 <Tab eventKey="busy" title="Busy" />
//             </Tabs>

//             {
//                 user.filter(item => item.timeManagment === freeBusy).map((item) =>
//                     <div key={item._id} className="mt-2 d-flex justify-content-between align-items-center p-2 gap-2" style={{ boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px` }}>
//                          <div className="d-flex gap-3 align-items-center">
//                             <img src={item.useUrl} style={{ width: '60px', height: '60px', borderRadius: '50%' }} alt="" />
//                             <div>
//                                 <small className="text-primary">{item.username}</small>
//                                 <div className="d-flex gap-2">
//                                     <small>{item.mobile},</small>
//                                     <small>{item.email}</small>
//                                 </div>
                                
//                                 <small>{item.Address}</small> <br />

//                                 <div className="d-flex gap-2">
//                                 {item.timeManagment === 'free'? <p className="text-success">Free</p> : <p className="text-danger">Busy</p>}
//                                 <small>{item.timeStatus}</small>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="me-3" >
//                             <div className="text-primary mb-2" onClick={() => freeButton(item._id, 'free')}>Free </div> 
//                             <div className="text-primary" onClick={() => freeButton(item._id, 'busy')}>Busy</div>
//                         </div>
//                     </div>)
//             }
//         </div>
//     );
// };

// export default Dashboard3;




import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useQuery } from "@tanstack/react-query";

const Dashboard3 = () => {
    const [freeBusy, setFreeBusy] = useState('free');
    console.log(freeBusy);

    const {
        data: user = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["instructorData"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            const data = await res.json();
            return data;
        },
    });

    const freeButton = (id, update) => {
        const information = {
            timeStatus: new Date().toLocaleTimeString(),
            dateStatus: new Date().toLocaleDateString(),
            id: id,
            timeManagment: update,
        };
        fetch(`http://localhost:5000/users`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(information),
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            });
    };

    console.log(user);

    return (
        <div>
            <Tabs
                activeKey={freeBusy}
                onSelect={(selectedKey) => setFreeBusy(selectedKey)}
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="free" title="Free Users">
                    {user.filter(item => item.timeManagment === 'free').map((item) => (
                        <div key={item._id} className="mt-2 d-flex justify-content-between align-items-center p-2 gap-2" style={{ boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px` }}>
                          <div className="d-flex gap-3 align-items-center">
                            <img src={item.useUrl} style={{ width: '60px', height: '60px', borderRadius: '50%' }} alt="" />
                            <div>
                                <small className="text-primary">{item.username}</small>
                                <div className="d-flex gap-2">
                                    <small>{item.mobile},</small>
                                    <small>{item.email}</small>
                                </div>
                                
                                <small>{item.Address}</small> <br />

                                <div className="d-flex gap-2">
                                {item.timeManagment === 'free'? <p className="text-success">Free</p> : <p className="text-danger">Busy</p>}
                                <small>{item.timeStatus}</small>
                                </div>
                            </div>
                        </div>
                        <div className="me-3" >
                            <div className="text-primary mb-2" onClick={() => freeButton(item._id, 'free')}>Free </div> 
                            <div className="text-primary" onClick={() => freeButton(item._id, 'busy')}>Busy</div>
                        </div>
                        </div>
                    ))}
                </Tab>
                <Tab eventKey="busy" title="Busy Users">
                    {user.filter(item => item.timeManagment === 'busy').map((item) => (
                        <div key={item._id} className="mt-2 d-flex justify-content-between align-items-center p-2 gap-2" style={{ boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px` }}>
                            <div className="d-flex gap-3 align-items-center">
                            <img src={item.useUrl} style={{ width: '60px', height: '60px', borderRadius: '50%' }} alt="" />
                            <div>
                                <small className="text-primary">{item.username}</small>
                                <div className="d-flex gap-2">
                                    <small>{item.mobile},</small>
                                    <small>{item.email}</small>
                                </div>
                                
                                <small>{item.Address}</small> <br />

                                <div className="d-flex gap-2">
                                {item.timeManagment === 'free'? <p className="text-success">Free</p> : <p className="text-danger">Busy</p>}
                                <small>{item.timeStatus}</small>
                                </div>
                            </div>
                        </div>
                        <div className="me-3" >
                            <div className="text-primary mb-2" onClick={() => freeButton(item._id, 'free')}>Free </div> 
                            <div className="text-primary" onClick={() => freeButton(item._id, 'busy')}>Busy</div>
                        </div>
                        </div>
                    ))}
                </Tab>
            </Tabs>
        </div>
    );
};

export default Dashboard3;
