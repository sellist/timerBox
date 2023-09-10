echo "Starting run script..."

while getopts e: flag
do
    case "${flag}" in
        e) env=${OPTARG};;
    esac
done

case "$env" in
    *dev*)
        cd app && npm run dev;;
    *docker*)
        docker compose up;;
    
esac

#  put stuff here to start docker with appropriate commands/envs