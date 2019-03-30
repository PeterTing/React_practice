import { default as _App } from './App.js'
import { connect } from 'react-redux'
import { RedirectAction } from '../../actions/index.js';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
	redirectToLogin: (history) => {
		dispatch(RedirectAction.login(history))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(_App)

// API.login('0933356403', '')
// 	.then((response) => 
// 		response.roles.admin ?
// 			response.roles.admin :
// 			Promise.reject(new Error('unauthorized'))
// 	)
// 	.then(admin => {
// 		localStorage.auth = JSON.stringify({...admin, phone: '0933356403'})
// 	})
// 	.then(API.fetchContainerList)
// 	.then(list => {
// 		const containers = JSON.stringify({
// 			dict: list.containerDict,
// 			type: list.containerType
// 		})
// 		localStorage.containers = containers
// 	})
// 	.then(API.fetchStoreList)
// 	.then(list => 
// 		list['shop_data']
// 			.filter(store=>store.contract.borrowable)
// 			.map(store=>({id: store.id, name: store.name}))
// 	)
// 	.then(list => {
// 		localStorage.stores = JSON.stringify(list)
// 	})
// 	.then(()=>API.fetchDeliveryList())
// 	.then(data=>console.log(data))
// 	.catch((err) => {
// 		switch (err.message) {
// 			case 'unauthorized':
// 				alert('沒有權限登入後台')
// 			default:
// 				alert(err)
// 		}
// 	})