Start-Job { cd ../../../.\xampp\.\htdocs\.\server\.\full_stack\.\back_end\; php artisan serve; }
Start-Job { cd ../../../.\xampp\.\htdocs\.\server\.\full_stack\.\front_end\; npm start; }
cd ../../../

start xampp-control.exe

Start-Sleep -s 10

get-job


Start-Sleep -s 30

get-job

receive-job 1

receive-job 3


Start-Sleep -s 2147483





