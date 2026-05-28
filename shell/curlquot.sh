declare -A headers
headers[Accept]='text/html'
headers[Content-Type]='text/html'

args=()

for key in "${!headers[@]}"
do
	args+=( -H "$key: ${headers[$key]}")
done

echo "${args[@]}"
printf '%q\n' "${args[@]}"
printf '%Q\n' "${args[@]}"


# curl -s "${args[@]}" https://example.com

1> /dev/null cat <<'EOF'
06:48:10       monkfish | just have one headers map where the key is the header name and
                        | the value its value. then compose a normal array of arguments
                        | from it before invoking curl.
06:49:28          vague | monkfish, I'm having trouble parsing what you just said
06:49:42       monkfish | # declare -A header; header[Accept]='application/json';
                        | header[Content-Type]='application/json'; args=(); for key in
                        | "${!header[@]}"; do args+=( -H "$key" "${header[$key]}" );
                        | done; declare -p args
06:49:47         +shbot | monkfish: declare -a args=([0]="-H" [1]="Content-Type"
                        | [2]="application/json" [3]="-H" [4]="Accept"
                        | [5]="application/json")
06:50:00       monkfish | now you have an indexed array that _can_ be expanded as curl
                        | "${args[@]}"
06:50:27       monkfish | actually, that's not quite right. args+=( -H "$key:
                        | ${header[$key]}" )
06:50:37       monkfish | # declare -A header; header[Accept]='application/json';
                        | header[Content-Type]='application/json'; args=(); for key in
                        | "${!header[@]}"; do args+=( -H "$key: ${header[$key]}" ); done;
                        | declare -p args
06:50:41         +shbot | monkfish: declare -a args=([0]="-H" [1]="Content-Type:
                        | application/json" [2]="-H" [3]="Accept: application/json")
06:51:03       monkfish | there. four discrete arguments that contain exactly what is
                        | needed.
EOF

