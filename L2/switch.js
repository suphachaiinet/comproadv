const status = 400;

switch (status) {
    case 200:
        console.log('OK!');
        break;
    case 400:
        console.log('Happy');
        break;
    case 500:
        console.log('Error!');
        break;
    default:
        console.log('Unknown status');
}