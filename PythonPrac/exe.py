s = 'django'
print(s[0])
print(s[-1])
print(s[:4])
print(s[1:4])
print(s[4:])
print(s[::-1])
print(s[::-2])


l = [3,7,[1,4,'hello']]
print(l)
l[2][2] = 'GoodBye'
print(l)


d1 = {'simple_key':'hello'}
print(d1['simple_key'])
d2 = {'k1':{'k2':'hello'}}
print(d2['k1']['k2'])
d3 = {'k1':[{'nest_key':['this is deep',['hello']]}]}
print(d3['k1'][0]['nest_key'][1][0])

mylist = [1,1,1,1,1,2,2,2,2,3,3,3,3]
x = set(mylist)
print(x)


age = 4
name = "Sammy"

# Use print formatting to print the following string:
"Hello my dog's name is Sammy and he is 4 years old"

print("Hello my dog name is {name} and he is {age} years old".format(name=name,age=age))
