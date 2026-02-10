class solution:
    def find unique(self , k , arr):
    #odd here

    for i in range(0, len(arr)):
        count = 1
    
    for j in range(i+1, len(arr)):
        if arr[i] == arr[j]:
            count += 1 

            if count ==1:
                return arr[i]