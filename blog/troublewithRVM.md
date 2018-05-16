# Trouble Downloading RVM

# One (May 9th)

Start: https://rvm.io/rvm/install, tried install GPG key.
First problem:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_4507324F735246B3A8499E91AAA4645D84114E8B5B52929844506954A23F71EA_1525898845134_Screen+Shot+2018-05-09+at+3.47.06+PM.png)


Google: “bash: gpg” and found [this website](http://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/) and [an answer on Stack Overflow](https://stackoverflow.com/questions/27041885/how-to-resolve-gpg-command-not-found-error-during-rvm-installation?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa) that recommended downloading Homebrew…


# Two

Start: download Homebrew with [this website](https://brew.sh).
Second problem:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_4507324F735246B3A8499E91AAA4645D84114E8B5B52929844506954A23F71EA_1525899297916_Screen+Shot+2018-05-09+at+3.54.39+PM.png)


Google: "failed during git init -q” and then went to [troubleshooting page for homebrew](https://docs.brew.sh/Troubleshooting). Tried a few of the commands. Ran brew update and brew doctor. Basically, it just told me the same thing:



![](https://d2mxuefqeaa7sj.cloudfront.net/s_4507324F735246B3A8499E91AAA4645D84114E8B5B52929844506954A23F71EA_1525901058722_Screen+Shot+2018-05-09+at+4.23.23+PM.png)


tried to run sudo chown -R $(whoami) /usr/local/Cellar and ran into…


# Three

Third problem: I don’t know what this means.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_4507324F735246B3A8499E91AAA4645D84114E8B5B52929844506954A23F71EA_1525901305528_Screen+Shot+2018-05-09+at+4.27.02+PM.png)



# Four

This is where I had to stop and go make dinner/give my mind a break.


# Five (May 10th)

Put all of the output into google and found [this webpage](https://www.hscripts.com/tutorials/mac-commands/chown.html). Seems like it’s exactly what I’m looking for but I don’t know how to use it. Tried to specify some parts of it with my username and file name. Didn’t work.


![](https://d2mxuefqeaa7sj.cloudfront.net/s_4507324F735246B3A8499E91AAA4645D84114E8B5B52929844506954A23F71EA_1525973486408_Screen+Shot+2018-05-10+at+12.31.13+PM.png)
