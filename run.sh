for i in `seq 1 50`; do
  eb scale 0
  sleep 30
  eb scale 1
  sleep 30
  echo $i
done
