import corona 

# print(corona.data)

# State
# cases
# recovered 
# active 

# ex:
# Texas
# cases: 1106235 
# recovered: 899579
# active: 186438
#
# California
# cases: 1106235 
# recovered: 899579
# active: 186438

#? [{}, {}, {}]

# def spacer():
#     print('')

# def info_by_state():
#     index = 0
#     for info in corona.data:
#         print(f"state: {corona.data[index]['state']}")
#         print(f"cases: {corona.data[index]['cases']}")
#         print(f"recovered: {corona.data[index]['recovered']}")
#         print(f"active: {corona.data[index]['active']}")
#         spacer()
#         index += 1

# def cases():
#     info_by_state()  
#     sum = 0  
#     for num_cases in info_by_state()['cases']:
#         sum += num_cases

# info_by_state()
# print(f"Total cases: {cases()}")

corona_data = corona.data

total_recovered = 0
most_recovered = 0
least_recovered = 0

for idx in corona_data:
    total_recovered += idx['recovered']
    if idx['recovered'] > most_recovered:
        most_recovered = idx['recovered']
        most_recovered_state = idx['state']
    if idx['recovered'] < most_recovered:
        least_recovered = idx['recovered']
        least_recovered_state = idx['state']
    print(f"""\tState : {idx['state']}
        Recovered : {idx['recovered']}
        Active cases : {idx['active']}\n""")
print(f"""\n\t Total Recovered : {total_recovered}
    Most recovered : {most_recovered_state} : {most_recovered}
    Least recovered : {least_recovered_state} : {least_recovered}""")