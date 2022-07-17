message=$1; shift;

if [ x"$message" = "x" ]; then
    echo "bash deploy.sh <commit_message>"
    exit 1
fi


git add .
git commit -m "$message"
git push origin master;git push origin master:gh-pages
