import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import MainDokter from './pages/MainDokter';
import MainPasien from './pages/MainPasien';
import MainPerawat from './pages/MainPerawat';
import MainPemilik from './pages/MainPemilik';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
						<Scene key="login" component={Login} title="Login" initial={true}/>
						<Scene key="maindokter" component={MainDokter} title="Menu Utama Dokter" hideNavBar={false}/>
						<Scene key="mainpasien" component={MainPasien} title="Menu Utama Pasien" hideNavBar={false}/>
						<Scene key="mainperawat" component={MainPerawat} title="Menu Utama Perawat" hideNavBar={false}/>
						<Scene key="mainpemilik" component={MainPemilik} title="Menu Utama Pemilik" hideNavBar={false}/>
			      <Scene key="signup" component={Signup} title="Register"/>
			    </Stack>
			 </Router>
			)
	}
}