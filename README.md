# jw-ionic-desktop
Project using ionic view for mobile, bootstrap views for desktop and angularjs service, controllers shared by both projects

## Setup your environment

I assume you have nodejs + npm. if not go to http://nodejs.org and install them.

1. install ionic and cordova
```
>npm install -g ionic cordova
```

2. install grunt-cli
```
>npm install -g grunt-cli
```

## Getting Started

1. Get the code
```
C:/> git clone https://github.com/jonathanwax/jw-ionic-desktop.git
```

2. go to the desktop folder
```
>cd jw-ionic-desktop
>cd desktop
```

3. install node modules and bower components
```
desktop> npm install
desktop> bower install
```

4. run the project
```
desktop> grunt run
```

## Running Tests
```
desktop> grunt test
```

## Build the project and deploy to ionic
```
desktop> grunt build
desktop> grunt deploy
```

## Ionic - run, build, package
"grunt deploy" copies the built files to ionic/www/.

1. Run the project in ionic
```
ionic> ionic serve   (or ionic --lab)
```

2. Build the project in ionic
```
ionic> ionic build
```