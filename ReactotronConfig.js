import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';
import Reactotron, { networking, openInEditor, trackGlobalErrors } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const scriptURL = NativeModules.SourceCode.scriptURL;
console.log('checkScriptUrl', scriptURL);
let scriptHostName = scriptURL.split('://')[1].split(':')[0];
console.log('checkScriptUrl', scriptHostName);

const yeOldConsoleLog = console.log;

console.log = (...args) => {
	yeOldConsoleLog(...args);

	Reactotron.display({
		name: 'CONSOLE.LOG =>',
		value: args,
		preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
	});
};

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
	.configure({
		name: 'Stamp Idols',
		host: scriptHostName,
		port: 9090,
	})
	.use(sagaPlugin())
	.use(reactotronRedux())
	.useReactNative()
	.use(openInEditor())
	.use(trackGlobalErrors({
		veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0
	}))
	.use(networking({
		ignoreContentTypes: /^(image)\/.*$/i,
		ignoreUrls: /\/(logs|symbolicate)$/,
	}))
	.connect();


console.tron = reactotron;

export default reactotron;
