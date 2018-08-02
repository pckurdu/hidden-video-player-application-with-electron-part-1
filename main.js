const {app,BrowserWindow}=require('electron')

const exec=require('child_process').exec

const path=require('path')
const url=require('url')

let win 

function createWindow() {
    
    win =new BrowserWindow({width:1000,height:800})

    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }))  

    win.openDevTools();// Developer Tool

    const bat=exec('cmd /c electron.bat 123456',{cwd:"D:\\electron\\hiddenVideoPlayer-part1\\bats"},function(){
            
    });

}

app.on('ready',createWindow)

app.on('before-quit', () => {
    const bat=exec('cmd /c electron.bat e',{cwd:"D:\\electron\\hiddenVideoPlayer-part1\\bats"},function(){
            
    });
    app.quit()
})

app.on('closed', () => {
    const bat=exec('cmd /c electron.bat e',{cwd:"D:\\electron\\hiddenVideoPlayer-part1\\bats"},function(){
            
    });
    app.quit()
})